package angular_grails

import grails.testing.mixin.integration.Integration
import grails.gorm.transactions.Rollback
import spock.lang.Specification
import org.hibernate.SessionFactory

@Integration
@Rollback
class OrgaoServiceSpec extends Specification {

    OrgaoService orgaoService
    SessionFactory sessionFactory

    private Long setupData() {
        // TODO: Populate valid domain instances and return a valid ID
        //new Orgao(...).save(flush: true, failOnError: true)
        //new Orgao(...).save(flush: true, failOnError: true)
        //Orgao orgao = new Orgao(...).save(flush: true, failOnError: true)
        //new Orgao(...).save(flush: true, failOnError: true)
        //new Orgao(...).save(flush: true, failOnError: true)
        assert false, "TODO: Provide a setupData() implementation for this generated test suite"
        //orgao.id
    }

    void "test get"() {
        setupData()

        expect:
        orgaoService.get(1) != null
    }

    void "test list"() {
        setupData()

        when:
        List<Orgao> orgaoList = orgaoService.list(max: 2, offset: 2)

        then:
        orgaoList.size() == 2
        assert false, "TODO: Verify the correct instances are returned"
    }

    void "test count"() {
        setupData()

        expect:
        orgaoService.count() == 5
    }

    void "test delete"() {
        Long orgaoId = setupData()

        expect:
        orgaoService.count() == 5

        when:
        orgaoService.delete(orgaoId)
        sessionFactory.currentSession.flush()

        then:
        orgaoService.count() == 4
    }

    void "test save"() {
        when:
        assert false, "TODO: Provide a valid instance to save"
        Orgao orgao = new Orgao()
        orgaoService.save(orgao)

        then:
        orgao.id != null
    }
}
