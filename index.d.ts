declare type GenderType = 'male' | 'female';
declare type NullableType<T> = T | null;
interface NameInterface {
    name: string;
    surname: string;
    fullname: string;
    gender: GenderType;
    transliteration: {
        name: string;
        surname: string;
        fullname: string;
    };
}
declare const names_male: any;
declare const names_female: any;
declare const surnames_male: any;
declare const surnames_female: any;
declare const genders: ['male', 'female'];
declare const getRandomGender: () => GenderType;
declare const getRandomNumber: (max?: number) => number;
declare const transliteration: (str: string) => string;
declare const create: (gender?: "male" | "female" | null | undefined) => NameInterface;
declare const many: (amount?: number, gender?: "male" | "female" | undefined) => NameInterface[];
