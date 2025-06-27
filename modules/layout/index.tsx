import Header from "./header";

const LayoutWireFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col relative ">
        <Header/>

            <main className="h-full overflow-auto ">
                {children}
            </main>

    </div>
  );
}

export default LayoutWireFrame;