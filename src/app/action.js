// 1. Create the API route
// app/api/newsletter/route.js
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const data = await request.json()
    const { email } = data

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Save to database
    const subscriber = await prisma.newsletterSubscription.create({
      data: {
        email,
        createdAt: new Date(),
      },
    })

    return NextResponse.json({ 
      message: 'Successfully subscribed!',
      subscriber 
    }, { status: 201 })

  } catch (error) {
    // Handle duplicate email error
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'This email is already subscribed' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}