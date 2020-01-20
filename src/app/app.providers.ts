import { SignFormService } from './services/signForm.service';
import { UserService } from './services/user.service';
import { CreateFormService } from './services/createForm.service';
import { CatalogService } from './services/catalog.service';
import { DetailsFormService } from './services/item-details.service';
import { ShoppingCardService } from './services/shopping-card.service';
import { EditFormService } from './services/edit-form.service';
import { AnnouncementsService } from './services/announcements.service';

export const providers = [
    SignFormService,
    UserService,
    CreateFormService,
    CatalogService,
    DetailsFormService,
    ShoppingCardService,
    EditFormService,
    AnnouncementsService
  ]