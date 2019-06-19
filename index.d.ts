declare namespace nengoose {
    class Db {
        constructor(database: string);

        /**
         * 
         * @param schema 
         */
        Schema(schema: any): Model;
    
        /**
         * Returns the string location of the database
         */
        getDatabaseLocation(): string;
    }

    class Model {
        constructor(database: string, schema: any);
        /**
         * 
         * @param newData 
         */
        Create(newData): Promise<any>;
        

        /**
         * 
         * @param id 
         */
        FindById(id: string): Promise<any>;


        /**
         * 
         * @param query 
         * @param options 
         */
        FindAll(query, options?): Promise<any>;

        /**
         * 
         * @param IdList 
         */
        FindByIdList(IdList: Array<any>): Promise<any>;
        
        /**
         * @param id
         * @param options
         */
        DeleteById(id, options): Promise<any>;
        
        /**
         * 
         * @param query 
         * @param newData 
         * @param options 
         */
        Update(query, newData, options): Promise<any>;
        
        /**
         * 
         * @param id 
         * @param newData 
         * @param options 
         */
        UpdateById(id, newData, options): Promise<any>;
    }
}

declare module 'nengoose' {
    export = nengoose;
}
