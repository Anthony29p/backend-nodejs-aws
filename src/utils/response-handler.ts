import Joi from 'joi';

import { HTTP } from '../common/constants';
import { HttpException, InternalServerErrorException } from '../common/errors';
import { cleanDoubleQuotes } from './string-operations';
import { APIGatewayProxyResult } from 'aws-lambda';

const errorHandler = (e: unknown): APIGatewayProxyResult => {
    if (Joi.isError(e)) {
        return {
            statusCode: HTTP.STATUS_400,
            body: JSON.stringify({ status: 'error', message: cleanDoubleQuotes(e.message) }),
        };
    }

    if (e instanceof HttpException) {
        return {
            statusCode: e.statusCode as HTTP,
            body: JSON.stringify({
                status: 'error',
                message: { status: 'error', message: e.message },
            }),
        };
    }

    const error = new InternalServerErrorException();

    return {
        statusCode: error.statusCode,
        body: JSON.stringify({
            status: 'error',
            message: { status: 'error', message: error.message },
        }),
    };
};

export default errorHandler;
