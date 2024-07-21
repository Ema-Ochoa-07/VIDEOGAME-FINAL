import { Resource } from '../../data';
import { CreateResourceDTO, CustomError } from '../../domain';


export class ResourceService {

  async findOneResourceById(id: number){
    const resource = await Resource.findOne({
      where: {
        id: id
      }
    })

    if (!resource) throw CustomError.notFound("Resource not found")

    return resource;
  }

  async findResourceAll(){
    try {
      return await Resource.find()
    } catch (error) {
      throw CustomError.internalServer('Internal server Error 🧨')
    }
  }
  

  async CreateResources(createResourceDTO: CreateResourceDTO){
    try {

      const resource = new Resource
      resource.name = createResourceDTO.name
      resource.description = createResourceDTO.description

      return await resource.save()
    } catch (error) {
      throw CustomError.internalServer('Internal server Error 🧨')
    }
  }

}