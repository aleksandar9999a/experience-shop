import { SignFormService } from './services/signForm.service';
import { UserService } from './services/user.service';
import { CreateFormService } from './services/createForm.service';
import { ShoppingCardService } from './services/shopping-card.service';
import { EditFormService } from './services/edit-form.service';
import { AnnouncementsService } from './services/announcements.service';
import { UserDataEditService } from './services/user-data-edit.service';

export const providers = [
  SignFormService,
  UserService,
  CreateFormService,
  ShoppingCardService,
  EditFormService,
  AnnouncementsService,
  UserDataEditService
];
