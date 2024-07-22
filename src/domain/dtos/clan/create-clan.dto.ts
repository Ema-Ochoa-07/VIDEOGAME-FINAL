


export class CreateClanDTO{
    private constructor(
        public readonly name: string,
        public readonly description: string
    ){}

    static create( object: { [key : string] : any } ): [string?, CreateClanDTO?] {
    
        const { name, description } = object;
    
        if( !name ) return ['name is required']
        if( !description ) return ['description is required']
    
        return [undefined, new CreateClanDTO( name, description )]
      }
    }

