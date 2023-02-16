import { ShopLayout } from "@/components/layouts"
import { Chip, Grid, Typography } from "@mui/material"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import NextLink from 'next/link';

const columns: GridColDef[] = [
    {field:'id', headerName:'ID', width:100},
    {field:'fullname', headerName:'Nombre Completo', width:300},    
 {
        field:'paid',
        headerName:'Pagada',
        description:'Muestra información si la orden está pagada o no',
        width: 200,
        renderCell: (params:GridValueGetterParams ) => {
            return(
                params.row.paid
                ? <Chip color="success" label="Pagada" variant='outlined'/>
                : <Chip color="error" label="No Pagada" variant='outlined'/>
            )
        }
        
    },

    {
        field:'orden',
        headerName:'Ver orden',
        width: 200,
        sortable: false,
        renderCell: (params:GridValueGetterParams ) => {
            return(
                <NextLink href={`/orders/${params.row.id}`} passHref>
                    Ver orden
                </NextLink>
            )
        }
        
    }


]

const rows = [
    {id: 1, paid: true, fullname:'Carla Reyes'},
    {id: 2, paid: false, fullname:'Melissa Ruelas'},
    {id: 3, paid: true, fullname:'Shepe Rod'},
    {id: 4, paid: false, fullname:'Silvia Godinez'},
    {id: 5, paid: true, fullname:'Olallo Reyes'},
    {id: 6, paid: false, fullname:'Carlos Rodriguez'},
    {id: 7, paid: true, fullname:'Cesar Loera'},

   
]


const HistoryPage = () => {
  return (
    <ShopLayout title={"Historial de Ordenes"} pageDescription={"Historial de ordenes del cliente"}>
        <Typography variant='h1' component='h1'>Historial de Ordenes</Typography>

        <Grid container>
            <Grid item xs={12} sx={{height:650, width:'100%'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </Grid>
        </Grid>

    </ShopLayout>
  )
}

export default HistoryPage