package angular_grails

import grails.gorm.services.Service

@Service(TonerRecebido)
interface TonerRecebidoService {

    TonerRecebido get(Serializable id)

    List<TonerRecebido> list(Map args)

    Long count()

    void delete(Serializable id)

    TonerRecebido save(TonerRecebido tonerRecebido)

}