import { Op } from 'sequelize';
import Registration from '../models/Registration';

import Student from '../models/Student';
import Plan from '../models/Plan';

class PendingService {
  async index(page) {
    try {
      return await Registration.findAndCountAll({
        limit: 10,
        offset: (page - 1) * 10,
        attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
        include: [
          {
            model: Student,
            as: 'student',
            attributes: ['name'],
          },
          {
            model: Plan,
            as: 'plan',
            attributes: ['title'],
          },
        ],
        where: {
          [Op.or]: [
            {
              plan_id: {
                [Op.eq]: null,
              },
            },
            {
              student_id: {
                [Op.eq]: null,
              },
            },
          ],
        },
      });
    } catch (e) {
      console.error(
        `Não foi possível acessar as matrículas pendentes: `,
        e.response.data.error
      );
      return undefined;
    }
  }
}

export default PendingService;
