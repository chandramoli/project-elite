import Header from "./header";

const LayoutWireFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col relative">
        <Header/>

        <div className="h-full w-full">
            <main className="flex flex-col items-center justify-center ">
                {children}
            </main>
        </div>
    </div>
  );
}

export default LayoutWireFrame;