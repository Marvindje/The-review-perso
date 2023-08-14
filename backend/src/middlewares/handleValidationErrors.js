// handleValidationErrors.js

// 1. Importations nécessaires
import { validationResult } from 'express-validator';

// 2. Middleware Definition
export const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);

    // Si des erreurs de validation sont présentes, renvoyez une réponse avec un statut 400 et les erreurs
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Si tout va bien, passez au middleware ou au contrôleur suivant
    next();
};
