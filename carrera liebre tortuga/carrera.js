class probabilidad
{
    constructor()
    {
    }
    calcular(ProbabilidadN)
    {
            return Math.trunc(Math.random() * ProbabilidadN + 1);
    }
}

class tortuga
{
    constructor()
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
    constructor()
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

class valores
{
    constructor()
    {
        this._longitud = Number(document.querySelector("#cantidad").value);
    }
    get longitud()
    {
        return this._longitud;
    }
    revisor()
    {
        if(this._longitud < 0)
        {
            this._longitud = 1;
        }
    }
}

class carrera extends valores
{
    constructor(longitud)
    {
        super(longitud);
    }
    puntos(P1, T1, L1)
    {
        let EG = new elecionGanador();
        var tortuga = 0;
        var liebre = 0;
        while(tortuga < this._longitud && liebre < this._longitud )
        {
            tortuga = tortuga + T1.puntos(P1);
            liebre = liebre + L1.puntos(P1);
        }
        if(liebre < 0)
        {
            liebre = 0;
        }
        else if(tortuga < 0)
        {
            tortuga = 0;
        }
        return EG.comparacion(tortuga, liebre);
    }
}

class elecionGanador extends valores
{
    constructor(longitud)
    {
        super(longitud);
    }
    comparacion(tortuga, liebre)
    {   
        let ganador = 0;
        if(tortuga >= this._longitud)
        {
            console.log("Perdio la liebre con: " + liebre + " pasos");
            ganador = "La tortuga gano con: " + tortuga + " pasos"
        }
        else if(liebre >= this._longitud)
        {
            console.log("Perdio la tortuga con: " + tortuga + " pasos");
            ganador = "La Liebre gano con: " + liebre + " pasos"
        }
        if(tortuga >= this._longitud && liebre >= this._longitud )
        {
            ganador = "Empate";
        }
        return ganador;
    }
}

document.querySelector("#calcular").addEventListener("click", ()=>{
        let longitud = Number(document.querySelector("#cantidad").value);
        let Valor = new valores(longitud);
        let C1 = new carrera();
        let P1 = new probabilidad();
        let L1 = new liebre();
        let T1 = new tortuga();
        let ganador =  C1.puntos(P1, T1, L1);
        
        console.log(ganador);
        console.log("La carrera fue de " + Valor.longitud);
    });