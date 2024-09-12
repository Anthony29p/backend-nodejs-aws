/* eslint max-classes-per-file: ["error", 20] */

import { HTTP } from './constants';

export abstract class HttpException extends Error {
    constructor(public message: string, public statusCode: number) {
        super(message);
    }
}

export class InternalServerErrorException extends HttpException {
    constructor(public message: string = 'Internal error server') {
        super(message, HTTP.STATUS_500);
    }
}

// Client errors
// No matchs errors
// Timeout errors
export class BadRequestException extends HttpException {
    constructor(public message: string, public param?: string) {
        super(message, HTTP.STATUS_400);
    }
}

export class NotFoundException extends HttpException {
    constructor(public message: string = 'not found') {
        super(message, HTTP.STATUS_404);
    }
}

// Authentication errors
export class UnauthorizedException extends HttpException {
    constructor(public message: string) {
        super(message, HTTP.STATUS_401);
    }
}

export class ForbiddenException extends HttpException {
    constructor(public message: string) {
        super(message, HTTP.STATUS_403);
    }
}

export class ConflictException extends HttpException {
    constructor(public message: string = 'conflict') {
        super(message, HTTP.STATUS_409);
    }
}

export class UnsupportedMediaTypeException extends HttpException {
    constructor(public message: string = 'unsupported media type') {
        super(message, HTTP.STATUS_415);
    }
}

// DTOs errors
export class UnprocessableEntityException extends HttpException {
    constructor(public message: string = 'unprocessable entity') {
        super(message, HTTP.STATUS_422);
    }
}

export class FailedDependencyException extends HttpException {
    constructor(public message: string = 'failed dependency', public param?: string) {
        super(message, HTTP.STATUS_424);
    }
}
export class TooManyRequestsException extends HttpException {
    constructor(public message: string) {
        super(message, HTTP.STATUS_429);
    }
}

export class NotImplementedException extends HttpException {
    constructor(public message: string) {
        super(message, HTTP.STATUS_501);
    }
}

export class ServiceUnavailableException extends HttpException {
    constructor(public message: string) {
        super(message, HTTP.STATUS_503);
    }
}

export class GatewayTimeoutException extends HttpException {
    constructor(public message: string) {
        super(message, HTTP.STATUS_504);
    }
}
