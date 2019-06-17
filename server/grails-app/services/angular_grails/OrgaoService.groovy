package angular_grails

import grails.gorm.services.Service

@Service(Orgao)
interface OrgaoService {

    Orgao get(Serializable id)

    List<Orgao> list(Map args)

    Long count()

    void delete(Serializable id)

    Orgao save(Orgao orgao)

}