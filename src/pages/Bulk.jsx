import { Show } from "../components/showProject/Show";
import bulk from "../assets/bulkSales/bulk0.png";
import bulk1 from "../assets/bulkSales/bulk1.png";
import bulk2 from "../assets/bulkSales/bulk2.png";
import bulk3 from "../assets/bulkSales/bulk3.png";

export function BulkSales() {
  return (
    <>
      <Show
        title={"BulkSales"}
        description={
          "Bulksales es un sistema de facturacion cuya finalidad es generar las facturas y contactos certeros a clientes de la empresa, cuenta con diferetes modulos y funcionalidades de las cuales existen algunas para medir metricas y generas archivos de ventas para sus estudios. "
        }
        src0={bulk}
        alt0={"bulkSales"}
        src1={bulk2}
        alt1={"bulkSales"}
        src2={bulk1}
        alt2={"bulkSales"}
        src3={bulk3}
        alt3={"bulkSales"}
      ></Show>
    </>
  );
}
