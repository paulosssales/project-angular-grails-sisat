package angular_grails

import grails.gorm.services.Service

@Service(Toner)
interface TonerService {

    Toner get(Serializable id)

    List<Toner> list(Map args)

    Long count()

    void delete(Serializable id)

    Toner save(Toner toner)

}