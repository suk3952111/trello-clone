// app/dashboard/page.tsx
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import bookshelfIcon from "@/public/bookshelf-ico.svg";

export default async function DashboardPage() {
  const templates = [
    "Template 1",
    "Template 2",
    "Template 3",
    "Template 4",
    "Template 5",
  ];
  const supabase = await createClient();

  // 세션을 통해 로그인된 사용자 정보를 가져옴
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  // 로그인되지 않은 경우 리다이렉트
  if (error || !user) {
    redirect("/login");
  }

  return (
    <div>
      <nav className="fixed top-0 w-full px-4 py-2 border-b shadow-sm flex justify-between items-center">
        <div className="hidden md:flex items-center gap-2">
          <Image
            aria-hidden
            src="/favicon.ico"
            alt="Globe icon"
            width={25}
            height={25}
          />
          <p className="font-bold"> Trello</p>
        </div>
        <div className="flex items-center w-full justify-between md:justify-end gap-2">
          {user.email}
        </div>
      </nav>
      <div className="pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
        <div className="flex gap-x-7">
          <div className="w-64 hidden md:block">
            <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-500 hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start">
              <Image
                src={bookshelfIcon}
                alt="책장 아이콘"
                width={16}
                height={16}
                priority
              />
              Boards
            </button>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-gray-500 h-[1px] w-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Image
                src={bookshelfIcon}
                alt="책장 아이콘"
                width={16}
                height={16}
                priority
              />
              Most popular templates
            </h2>
            <p className="text-sm text-muted-foreground py-4">
              Get going faster with a template from the Trello community
            </p>
            <div className="grid grid-cols-4 gap-4">
              {templates.map((template, index) => (
                <div
                  key={`key-${index}`}
                  className="border rounded-md p-4 h-24 bg-gray-300"
                >
                  <p className="font-semibold">{template}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <h1>Welcome to Dashboard</h1>
      <p>안녕하세요, {user.email}님!</p>
      <p>유저 ID: {user.id}</p>
      <p>유저 이름: {user.user_metadata?.full_name}</p> */}
      {/* 사용자 정보에 따라 필요한 데이터를 추가로 표시 가능 */}
    </div>
  );
}
