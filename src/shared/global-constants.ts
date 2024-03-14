export class GlobalConstants {
    // message
    public static genericError:string = "Something went wrong. Please try again later.";
    public static unauthorized:string = "You do not have access to this page.";
    public static productExists:string = "This product already exists.";
    public static productAdded:string = "Product added successfully.";

    // regex
    public static nameRegex:string = "[a-zA-Z0-9 ]*";
    public static emailRegex:string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
    public static contactRegex:string = "^[e0-9]{10,10}$";
    // public static dateRegex: string = "dd-mm-yyyy";
    public static ageRegex: string = "^(?:[1-9][0-9]?|100)$"; 
    // public static passwordRegex: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";


    // error
    public static error:string = "error";
}
