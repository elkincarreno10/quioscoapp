import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, pagina }) {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>{`Café - ${pagina}`}</title>
        <meta name="description" content="Quosco Cafetería" />
      </Head>

      <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                <Image
                    width={300}
                    height={100}
                    src="/assets/img/logo.svg"
                    alt="imagen logotipo"
                />
                <div className="flex flex-col mt-10 text-center">
                  <button 
                    onClick={() => {
                      router.push("/admin")
                    }}
                    className={`${router.pathname === '/admin' ? 'bg-amber-500' : ''} font-black text-3xl p-6 border`}
                  >
                    Pedidos Pendientes
                  </button>
                  <button 
                    onClick={() => {
                      router.push("/admin/pedidosCompletados")
                    }} 
                    className={`${router.pathname === '/admin/pedidosCompletados' ? 'bg-amber-500' : ''} font-black text-3xl p-6 border`}
                  >
                    Pedidos Completos
                  </button>
                </div>
            </aside>

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />
    </>
  );
}