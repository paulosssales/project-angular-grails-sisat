package angular_grails

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class AdministradorController {

    AdministradorService administradorService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond administradorService.list(params), model:[administradorCount: administradorService.count()]
    }

    def show(Long id) {
        respond administradorService.get(id)
    }

    def save(Administrador administrador) {
        if (administrador == null) {
            render status: NOT_FOUND
            return
        }

        try {
            administradorService.save(administrador)
        } catch (ValidationException e) {
            respond administrador.errors, view:'create'
            return
        }

        respond administrador, [status: CREATED, view:"show"]
    }

    def update(Administrador administrador) {
        if (administrador == null) {
            render status: NOT_FOUND
            return
        }

        try {
            administradorService.save(administrador)
        } catch (ValidationException e) {
            respond administrador.errors, view:'edit'
            return
        }

        respond administrador, [status: OK, view:"show"]
    }

    def delete(Long id) {
        if (id == null) {
            render status: NOT_FOUND
            return
        }

        administradorService.delete(id)

        render status: NO_CONTENT
    }
}
