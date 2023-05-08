import { Play } from "phosphor-react";
import{ useForm } from 'react-hook-form'

import { 
    CountdownContainer, 
    FormContainer, 
    HomeContainer, 
    MinuteAmountInput, 
    Separator, 
    StartCountdownButton, 
    TaskInput } 
    from "./styles";



export function Home() {
    const {  register, handleSubmit} = useForm()


    function handleSubmit(event){
        event.target.task.value
        
    }

}
    return (
        <HomeContainer>
            <form onSubmit={handleSubmit} action="">
              <FormContainer>
              <label htmlFor="">Vou trabalhar em</label>
                <TaskInput 
                id="task" 
                list="task-suggestions"
                placeholder="Dê um nome para seu projeto"
                {...register('task')}
                 />

                <datalist id="task-suggestions">
                    <option value="Projeto 1"/>
                    <option value="Projeto 2"/>
                    <option value="Projeto 3"/>
                    <option value="Banana"/>
                    </datalist>

                <label htmlFor="">durante</label>
                <MinuteAmountInput 
                 type="number" 
                 id="minutesAmount" 
                 placeholder="00"
                 step={5}
                 min={5}
                 max={60} />

                <span>minutos.</span>
              </FormContainer>

              <CountdownContainer>
                <span>0</span>
                <span>0</span>
                <Separator>:</Separator>
                <span>0</span>
                <span>0</span>
            </CountdownContainer>

            <StartCountdownButton disabled={!task} type="submit">
                <Play size={24} />
                Começar
            </StartCountdownButton>
            </form>   
        </HomeContainer>
        )
    }
