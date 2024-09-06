import mercadoPagoLogo from '../image/mercado_pago.png';
import visaLogo from '../image/Visa_Logo.png';
import masterCardLogo from '../image/mastercard_logo.png';
import debitLogo from '../image/debit_card.png';
import transferLogo from '../image/transfer.png';

const Pagos = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4">Métodos de Pago</h2>
      <h3 className='text-xl font-bold text-center mb-2'>Te enviamos Link o Alias</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <img src={visaLogo} alt="Visa" className="h-12 w-auto" />
        <img src={masterCardLogo} alt="MasterCard" className="h-12 w-auto" />
        <img src={transferLogo} alt="Transferencias" className="h-12 w-auto" />
        <img src={debitLogo} alt="Débito" className="h-12 w-auto" />
        <img src={mercadoPagoLogo} alt="Mercado Pago" className="h-12 w-auto" />
      </div>
    </div>
  );
};

export default Pagos;