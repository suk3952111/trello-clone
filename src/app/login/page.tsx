import Image from "next/image";
import Link from "next/link";
import googleIco from "@/public/google-ico.svg";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border shadow-md rounded-md w-full max-w-sm mx-1 bg-white p-6">
        <p className="text-center text-2xl font-bold ">Login</p>
        <Link href="/api/auth/google" className="mt-4 block">
          <button className="w-full text-center py-2 my-3 border flex items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:shadow transition duration-150">
            <Image
              className="mr-2"
              src={googleIco}
              alt="구글 아이콘"
              width={20}
              height={20}
              priority
            />
            Login with Google
          </button>
        </Link>
      </div>
    </div>
  );
}
