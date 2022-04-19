import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";

const CarForm = ({setNewCar, updateCar, setUpdatedCar}) => {
    const {register, reset, handleSubmit, setValue, formState:{errors, isValid}}=useForm({
        resolver:joiResolver(carValidator),
        mode: "onTouched"
    })
    const mySubmit = async (car)=> {
        try{
            if (updateCar) {
                const {data} = await carService.updateById(updateCar.id, car);
                setUpdatedCar(data);
                reset()
            } else {
                const {data} = await carService.create(car)
                setNewCar(data)
                reset()
            }
        }catch (e){}
    }
    useEffect(()=>{
        if(updateCar){
            const {model, price, year} = updateCar
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    },[updateCar])

    return (
        <div>
            <form onSubmit={handleSubmit(mySubmit)}>
                <div><label> Model:<input type="text" {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label> Price:<input type="number" {...register('price', {valueAsNumber:true})}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label> Year:<input type="number" {...register('year', {valueAsNumber:true})}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <button>save</button>
            </form>
        </div>
    );
};

export {CarForm};