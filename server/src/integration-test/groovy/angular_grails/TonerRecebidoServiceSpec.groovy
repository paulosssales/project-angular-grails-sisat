package angular_grails

import grails.testing.mixin.integration.Integration
import grails.gorm.transactions.Rollback
import spock.lang.Specification
import org.hibernate.SessionFactory

@Integration
@Rollback
class TonerRecebidoServiceSpec extends Specification {

    TonerRecebidoService tonerRecebidoService
    SessionFactory sessionFactory

    private Long setupData() {
        // TODO: Populate valid domain instances and return a valid ID
        //new TonerRecebido(...).save(flush: true, failOnError: true)
        //new TonerRecebido(...).save(flush: true, failOnError: true)
        //TonerRecebido tonerRecebido = new TonerRecebido(...).save(flush: true, failOnError: true)
        //new TonerRecebido(...).save(flush: true, failOnError: true)
        //new TonerRecebido(...).save(flush: true, failOnError: true)
        assert false, "TODO: Provide a setupData() implementation for this generated test suite"
        //tonerRecebido.id
    }

    void "test get"() {
        setupData()

        expect:
        tonerRecebidoService.get(1) != null
    }

    void "test list"() {
        setupData()

        when:
        List<TonerRecebido> tonerRecebidoList = tonerRecebidoService.list(max: 2, offset: 2)

        then:
        tonerRecebidoList.size() == 2
        assert false, "TODO: Verify the correct instances are returned"
    }

    void "test count"() {
        setupData()

        expect:
        tonerRecebidoService.count() == 5
    }

    void "test delete"() {
        Long tonerRecebidoId = setupData()

        expect:
        tonerRecebidoService.count() == 5

        when:
        tonerRecebidoService.delete(tonerRecebidoId)
        sessionFactory.currentSession.flush()

        then:
        tonerRecebidoService.count() == 4
    }

    void "test save"() {
        when:
        assert false, "TODO: Provide a valid instance to save"
        TonerRecebido tonerRecebido = new TonerRecebido()
        tonerRecebidoService.save(tonerRecebido)

        then:
        tonerRecebido.id != null
    }
}
