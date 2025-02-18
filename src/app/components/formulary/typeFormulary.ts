import { LabelInputInterface } from "./label-input/typeLabelInput";
import { PstrongInterface } from "../pstrong/typePstrong";
import { ButtonInterface } from "../button/typeButton";

type FormularyTypeListInputs = (LabelInputInterface | ButtonInterface | PstrongInterface)[];

export interface FormularyInterface {
    inputs: FormularyTypeListInputs;
    onSubmit: Function;
}