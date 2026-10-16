import { NativeThemeProvider } from "@/components/ui/native-theme-provider";
import type { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

// 改为命名导出，匹配项目里其他地方的使用方式
export function RootLayout({ children }: PropsWithChildren) {
  return (
    <NativeThemeProvider
      attribute="class"
      enableSystem
      disableTransitionOnChange
    >
      {/* 强行给所有页面顶部加安全距离：优先使用手机系统标准安全区，没有的话强制留 30px 高度 */}
      <div className="min-h-screen" style={{ paddingTop: 'max(env(safe-area-inset-top), 30px)' }}>
        {children}
      </div>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          top: "calc(24px + var(--safe-area-top))",
        }}
        toastOptions={{
          duration: 2000,
          style: {
            padding: "12px 16px",
            fontSize: "14px",
            borderRadius: "8px",
            maxWidth: "90%",
            margin: "0 auto",
          },
        }}
      />
    </NativeThemeProvider>
  );
}