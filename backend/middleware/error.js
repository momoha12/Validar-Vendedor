const error = (err, req, res, next) => {

    console.error('ERROR DETECTADO:', err.message);

    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        ok: false,
        error: err.message || 'Error interno del servidor'
    });
};

module.exports = error;
