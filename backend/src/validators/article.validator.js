import { checkSchema } from 'express-validator';

export const articleSchema = checkSchema({
    content: {
        exists: {
            errorMessage: "Un contenu est requis",
            options: {
                checkFalsy: true,
            },
        },
        isString: {
            errorMessage: "Votre contenu doit être de type text"
        },
        isLength: {
            options: { min: 15, max: 255 },
            errorMessage: "Votre message doit contenir entre 15 et 255 caracteres"
        },
    },
    title: {
        exists: {
            errorMessage: "Un titre est requis",
            options: {
                checkFalsy: true,
            },
        },
        isString: {
            errorMessage: "Votre titre doit être de type text"
        },
        isLength: {
            options: { min: 5, max: 20 },
            errorMessage: "Votre message doit contenir entre 5 et 20 caracteres"
        },
    },
    user_id: {
        exists: {
            errorMessage: "Un utilisateur est requis",
            options: {
                checkFalsy: true,
            },
        },
        isNumeric: {
            errorMessage: "Votre identifiant doit être de type number",
        },
    }
});
