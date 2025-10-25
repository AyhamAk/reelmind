import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth"
import prisma from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const session = await auth()
    console.log("[API] Survey POST - Session user ID:", session?.user?.id)

    const body = await request.json()
    console.log("[API] Survey POST - Request body:", body)

    const {
      platform,
      goal,
      postingFrequency,
      userType,
      automationLevel,
      selectedServices,
    } = body

    const surveyData = {
      userId: session?.user?.id || null,
      platform,
      goal,
      postingFrequency,
      userType,
      automationLevel,
      selectedServices: selectedServices
        ? JSON.stringify(selectedServices)
        : null,
    }

    console.log("[API] Creating survey response with data:", surveyData)

    // Create survey response
    const surveyResponse = await prisma.surveyResponse.create({
      data: surveyData,
    })

    console.log("[API] Survey created successfully:", surveyResponse.id)

    return NextResponse.json({
      success: true,
      surveyResponseId: surveyResponse.id,
    })
  } catch (error) {
    console.error("[API] Error saving survey response:", error)
    return NextResponse.json(
      { success: false, error: "Failed to save survey response", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await auth()
    console.log("[API] Survey GET - Session user ID:", session?.user?.id)

    if (!session?.user?.id) {
      console.log("[API] Survey GET - No session, unauthorized")
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      )
    }

    // Get all survey responses for the current user
    const surveyResponses = await prisma.surveyResponse.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    console.log("[API] Survey GET - Found responses:", surveyResponses.length)

    return NextResponse.json({
      success: true,
      surveyResponses,
    })
  } catch (error) {
    console.error("[API] Error fetching survey responses:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch survey responses", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}
