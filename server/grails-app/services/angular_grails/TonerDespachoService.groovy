package angular_grails

import grails.gorm.services.Service

@Service(TonerDespacho)
interface TonerDespachoService {

    TonerDespacho get(Serializable id)

    List<TonerDespacho> list(Map args)

    Long count()

    void delete(Serializable id)

    TonerDespacho save(TonerDespacho tonerDespacho)

}