import { Url } from "url";
import { Measure } from "./measure";

export class Ingredient {
    public aisle!: string;
    public amount!: number;
    public consistency!: string;
    public image!: Url;
    public measures!: { 'metric': Measure, 'us': Measure };
    public meta!: any;
    public metaInformation!: any;
    public name!: string;
    public original!: string;
    public originalName!: string;
    public originalString!: string;
    public unit!: string;
}