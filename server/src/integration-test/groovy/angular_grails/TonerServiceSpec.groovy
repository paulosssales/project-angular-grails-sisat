package angular_grails

import grails.testing.mixin.integration.Integration
import grails.gorm.transactions.Rollback
import spock.lang.Specification
import org.hibernate.SessionFactory

@Integration
@Rollback
class TonerServiceSpec extends Specification {

    TonerService tonerService
    SessionFactory sessionFactory

    private Long setupData() {
        // TODO: Populate valid domain instances and return a valid ID
        //new Toner(...).save(flush: true, failOnError: true)
        //new Toner(...).save(flush: true, failOnError: true)
        //Toner toner = new Toner(...).save(flush: true, failOnError: true)
        //new Toner(...).save(flush: true, failOnError: true)
        //new Toner(...).save(flush: true, failOnError: true)
        assert false, "TODO: Provide a setupData() implementation for this generated test suite"
        //toner.id
    }

    void "test get"() {
        setupData()

        expect:
        tonerService.get(1) != null
    }

    void "test list"() {
        setupData()

        when:
        List<Toner> tonerList = tonerService.list(max: 2, offset: 2)

        then:
        tonerList.size() == 2
        assert false, "TODO: Verify the correct instances are returned"
    }

    void "test count"() {
        setupData()

        expect:
        tonerService.count() == 5
    }

    void "test delete"() {
        Long tonerId = setupData()

        expect:
        tonerService.count() == 5

        when:
        tonerService.delete(tonerId)
        sessionFactory.currentSession.flush()

        then:
        tonerService.count() == 4
    }

    void "test save"() {
        when:
        assert false, "TODO: Provide a valid instance to save"
        Toner toner = new Toner()
        tonerService.save(toner)

        then:
        toner.id != null
    }
}
