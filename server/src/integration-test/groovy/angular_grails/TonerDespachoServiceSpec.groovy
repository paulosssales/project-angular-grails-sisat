package angular_grails

import grails.testing.mixin.integration.Integration
import grails.gorm.transactions.Rollback
import spock.lang.Specification
import org.hibernate.SessionFactory

@Integration
@Rollback
class TonerDespachoServiceSpec extends Specification {

    TonerDespachoService tonerDespachoService
    SessionFactory sessionFactory

    private Long setupData() {
        // TODO: Populate valid domain instances and return a valid ID
        //new TonerDespacho(...).save(flush: true, failOnError: true)
        //new TonerDespacho(...).save(flush: true, failOnError: true)
        //TonerDespacho tonerDespacho = new TonerDespacho(...).save(flush: true, failOnError: true)
        //new TonerDespacho(...).save(flush: true, failOnError: true)
        //new TonerDespacho(...).save(flush: true, failOnError: true)
        assert false, "TODO: Provide a setupData() implementation for this generated test suite"
        //tonerDespacho.id
    }

    void "test get"() {
        setupData()

        expect:
        tonerDespachoService.get(1) != null
    }

    void "test list"() {
        setupData()

        when:
        List<TonerDespacho> tonerDespachoList = tonerDespachoService.list(max: 2, offset: 2)

        then:
        tonerDespachoList.size() == 2
        assert false, "TODO: Verify the correct instances are returned"
    }

    void "test count"() {
        setupData()

        expect:
        tonerDespachoService.count() == 5
    }

    void "test delete"() {
        Long tonerDespachoId = setupData()

        expect:
        tonerDespachoService.count() == 5

        when:
        tonerDespachoService.delete(tonerDespachoId)
        sessionFactory.currentSession.flush()

        then:
        tonerDespachoService.count() == 4
    }

    void "test save"() {
        when:
        assert false, "TODO: Provide a valid instance to save"
        TonerDespacho tonerDespacho = new TonerDespacho()
        tonerDespachoService.save(tonerDespacho)

        then:
        tonerDespacho.id != null
    }
}
