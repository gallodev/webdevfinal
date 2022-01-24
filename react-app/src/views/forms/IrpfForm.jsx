import React, { useState } from "react"
import PersonIRPF from "../../domain/PersonIrpf"
import IrpfController from "../../controllers/IrpfController"
import useInput from "../../hooks/useInput"



const IrpfForm = () => {
    const [controller,] = useState(new IrpfController())
    const [totalSalary, totalSalaryProps, resettotalSalary] = useInput(0.0)
    const [dependents, dependentsNumberProps, resetdependentsNumber] = useInput(0.0)
    const [person, setPerson] = useState(new PersonIRPF(0,0));
    const [showModalResultado, setShowModalResultado] = useState(false);

    const handleModalResultado = () => { setShowModalResultado(!showModalResultado)}

    const calculate = async (evt) => {
        evt.preventDefault()
        const p = new PersonIRPF(parseFloat(totalSalary), parseFloat(dependents))                                    
        p.irpf = await controller.calculate(p)
        setPerson(p)        
        handleModalResultado()
    };


    return (
        <>
        <form className="form" onSubmit={calculate}> 
            <div className="row"/>                
            { totalSalaryProps.length > 0  ? 
                <input id="totalSalary"
                        type="number"                          
                        {...totalSalaryProps}
                        placeholder="Salário total"/>            
            : 
                <input id="totalSalary"
                        type="number"                                                  
                        placeholder="Salário total"/>    
            }
            <div className="row"/>     
            { dependentsNumberProps.length > 0 ? 
                <input id="dependents"
                        type="number"                         
                        {...dependentsNumberProps}
                        placeholder="Número de dependentes"/>
                :
                <input id="dependents"
                        type="number"                                                 
                        placeholder="Número de dependentes"/>
            }           
            <div className="col-12 mb-3">
                <button
                    className="btn btn-outline-primary primary-action mt-3"
                    type="submit"
                >
                    Calcular
                </button>
            </div>        
        </form>
        { showModalResultado && 
            <div className="col-12 mb-3">
                <p>Salario: {person.totalSalary}</p>
                <p>dependentes: {person.dependentsNumber}</p>
                <p>irpf: {person._irpf}</p>
            </div>
        }
        
        </>
    )
}

export default IrpfForm