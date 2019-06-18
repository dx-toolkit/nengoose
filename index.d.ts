declare namespace nengoose {
    class Db {
        constructor(database: string);
        Schema(schema: any): Model;
    
        getDatabaseLocation(): string;
    }

    class Model {
        constructor(database: string, schema: any);
        Create(newData): Promise<any>;
        FindById(id: number): Promise<any>;
        FindAll(query, options): Promise<any>;
        FindByIdList(IdList: Array<any>): Promise<any>;
        DeleteById(id, options): Promise<any>;
        Update(query, newData, options): Promise<any>;
        UpdateById(id, newData, options): Promise<any>;
    }
}

declare module 'nengoose' {
    export = nengoose;
}
