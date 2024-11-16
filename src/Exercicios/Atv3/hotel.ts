import { Reserva } from "./reserva.js";

export class Hotel{
    private reservas: Reserva[] = [];

    registrarReserva(reserva: Reserva):void{
        this.reservas.push(reserva);
    }
    cancelarReserva(numeroQuarto: number): void {
        const reservaIndex = this.reservas.findIndex(q => q.numeroQuarto === numeroQuarto);

        if (reservaIndex !== -1) {
            this.reservas.splice(reservaIndex, 1);
            console.log(`Reserva do quarto ${numeroQuarto} cancelada com sucesso.`);
        } else {
            console.log(`Reserva para o quarto ${numeroQuarto} não encontrada.`);
        }
    }
    ConsultarStatusQuarto(numeroQuarto: number): string {
        const reserva = this.reservas.find(q => q.numeroQuarto === numeroQuarto);
        
        if (reserva) {
            return `Quarto ${numeroQuarto} está reservado por ${reserva.nomeHospede}.`;
        } else {
            return `Quarto ${numeroQuarto} está disponível.`;
        }
    }
    
    listarReservas(): Reserva[] {
        return this.reservas;
    }
}