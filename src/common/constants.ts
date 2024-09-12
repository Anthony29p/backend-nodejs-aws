export enum HANDLER {
    ENTITY = 'Entity Handler |',
    PERSON = 'Person Handler |',
}

export enum SERVICE {
    ENTITY = 'Entity Service |',
    PERSON = 'Person Service |',
}

export enum REPOSITORY {
    ENTITY = 'Entity Repository |',
    PERSON = 'Person Repository |',
}

export enum METHOD {
    CREATE = 'create',
    FIND = 'find',
}

export enum PROVIDER {
    STAR_WARS = 'Star Wars Provider |',
}

export enum HTTP {
    STATUS_200 = 200,
    STATUS_201 = 201,
    STATUS_400 = 400,
    STATUS_401 = 401,
    STATUS_403 = 403,
    STATUS_409 = 409,
    STATUS_415 = 415,
    STATUS_422 = 422,
    STATUS_424 = 424,
    STATUS_429 = 429,
    STATUS_404 = 404,
    STATUS_500 = 500,
    STATUS_501 = 501,
    STATUS_503 = 503,
    STATUS_504 = 504,
}

export enum HTTP_METHOD {
    GET = 'GET',
    POST = 'POST',
}

export enum NUMBER {
    ZERO = 0,
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    TEN = 10,
    TWENTY_FIVE = 25,
    THIRTY = 30,
    SIXTY = 60,
    ONE_HUNDRED = 100,
    THREE_HUNDRED_SIXTY_FIVE = 365,
    ONE_THOUSAND = 1000,
}

export const numberRegex = /^[0-9]+$/;
