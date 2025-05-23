export const validatorSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        console.log(req.body)
        next();
    } catch (error) {
        console.log(error)
        return res
        .status(400)
        .json({ error: error.errors.map( (error) => error.message) });
    }
}