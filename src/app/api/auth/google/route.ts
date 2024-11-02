// app/api/auth/google/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/api/auth/callback", // 콜백 URL 설정
    },
  });

  if (error || !data.url) {
    return NextResponse.json({ error: "로그인 실패" }, { status: 500 });
  }

  return NextResponse.redirect(data.url);
}
