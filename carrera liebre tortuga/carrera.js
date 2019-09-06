class probabilidad
{
    contructor()
    {
    }
    calcular(ProbabilidadN)
    {
            return Math.trunc(Math.random() * ProbabilidadN + 1);
    }
}
class tortuga
{
    contructor()
    {
    }
    puntos(P1)
    {
        let ProbabilidadN = 10;
        let punto = P1.calcular(ProbabilidadN);
        let total = 0;
        if(1 === punto || 2 === punto)//20%
        {
            total = -6;
        }
        else if (3 === punto || 4 === punto || 5 === punto)//30%
        {
            total = +1;
        }
        else//50%
        {
            total = +3;
        }
        return total;
    }
}
class liebre
{
    contructor()
    {
    }
    puntos(P1)
    {
        let ProbabilidadN = 20;
        let punto = P1.calcular(ProbabilidadN);
        let total = 0;
        if(1 === punto || 2 === punto)//10%
        {
            total = -12;
        }
        else if (3 === punto || 4 === punto || 5 === punto)//15%
        {
            total = -2;
        }
        else if (6 === punto || 7 === punto || 8 === punto || 9 === punto)//20%
        {
            total = +0;
        }
        else if (10 === punto || 11 === punto || 12 === punto || 13 === punto)//20%
        {
            total = +9;
        }
        else//35%
        {
            total = +1;
        }
        return total;
    }
}
class carrera
{
    contructor(cantidad)
    {
        console.log("hola");
        this._cantidad = cantidad;;
    }
    get cantidad()
    {
        return this._cantidad;
    }
    puntos(P1, T1, L1, cantidad)
    {
        console.log(cantidad)
        let EG = new elecionGanador();
        var tortuga = 0;
        var liebre = 0;
        while(tortuga < cantidad && liebre < cantidad )
        {
            tortuga = tortuga + T1.puntos(P1);
            liebre = liebre + L1.puntos(P1);
        }
        return EG.comparacion(tortuga, liebre, cantidad);
    }
}
class elecionGanador extends carrera
{
    constructor()
    {
        super(cantidad);
    }
    comparacion(tortuga, liebre, puntos)
    {   
        console.log(puntos)
        let ganador = 0;
        if(tortuga >= puntos)
        {
            console.log("Perdio la liebre con: " + liebre + " pasos");
            ganador = "La tortuga gano con: " + tortuga + " pasos"
        }
        else if(liebre >= puntos)
        {
            console.log("Perdio la tortuga con: " + tortuga + " pasos");
            ganador = "La Liebre gano con: " + liebre + " pasos"
        }
        if(tortuga >= puntos && liebre >= puntos )
        {
            ganador = "Empate";
        }
        return ganador;
    }
}
document.querySelector("#calcular").addEventListener("click", ()=>{
        let cantidad = Number(document.querySelector("#cantidad").value);
        console.log(cantidad);
        let C1 = new carrera();
        let P1 = new probabilidad();
        let L1 = new liebre();
        let T1 = new tortuga();
        let ganador =  C1.puntos(P1, T1, L1, cantidad);
        console.log(ganador);
    });