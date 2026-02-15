import { getCollection, updateCollection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const enquiries = await getCollection("enquiries");
    
    const newEnquiry = {
      id: crypto.randomUUID(),
      ...body,
      date: new Date().toISOString(),
      status: "new"
    };

    const updatedEnquiries = [newEnquiry, ...enquiries];
    await updateCollection("enquiries", updatedEnquiries);
    
    return NextResponse.json({ success: true, message: "Enquiry received" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit enquiry" }, { status: 500 });
  }
}
