import useSWR from 'swr'
import axios from 'axios';
import AdminLayout from "@/layout/AdminLayout";
import OrdenCompleta from '@/components/OrdenCompleta';

export default function PedidosCompletados() {

    const fetcher = () => axios('../api/ordenesCompletas').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('../api/ordenesCompletas', fetcher, {refreshInterval: 100})

    return (
        <AdminLayout pagina={'Admin - Completos'}>
            <h1 className="text-4xl font-black">Panel de Administración</h1>
            <p className="text-2xl my-10">Administra las ordenes</p>

            {data && data.length ? data.map(orden => 
                <OrdenCompleta 
                    key={orden.id}
                    orden={orden}
                />
            ) : <p>No hay ordenes completadas</p>}
        </AdminLayout>
    )
}