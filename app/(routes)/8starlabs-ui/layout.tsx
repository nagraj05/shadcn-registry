import SystemBanner from "@/components/8starlabs-ui/system-banner"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SystemBanner text="You are in Development Mode"
                color="bg-orange-500"
                size="sm" />
            {children}
        </>
    )
}