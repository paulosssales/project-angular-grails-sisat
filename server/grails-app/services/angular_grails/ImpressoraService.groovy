package angular_grails

import grails.gorm.services.Service

@Service(Impressora)
interface ImpressoraService {

    Impressora get(Serializable id)

    List<Impressora> list(Map args)

    Long count()

    void delete(Serializable id)

    Impressora save(Impressora impressora)

}