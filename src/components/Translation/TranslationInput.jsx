import { useForm } from "react-hook-form"

const TranslationInput = ({onTranslation}) => {
    const {register, handleSubmit} = useForm()
    
    const onSubmit = ({translateInput}) => {
        onTranslation(translateInput)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="border-translate">
                <input type="text" className="input-text" {...register('translateInput')} placeholder="⌨️️ | Hello" />
                <button type="submit" className="translate-btn">➜</button>
            </fieldset>
        </form>
    )
}
export default TranslationInput