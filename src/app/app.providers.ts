import { SignFormService } from './services/signForm.service';
import { UserService } from './services/user.service';
import { CreateFormAnimations } from './services/createFormAnimations.service';
import { AdvertisementsService } from './services/advertisements.service';
import { CatalogService } from './services/catalog.service';
import { DetailsFormService } from './services/item-details.service';
import { ShoppingCardService } from './services/shopping-card.service';
import { EditFormService } from './services/edit-form.service';

export const providers = [
    SignFormService,
    UserService,
    CreateFormAnimations,
    AdvertisementsService,
    CatalogService,
    DetailsFormService,
    ShoppingCardService,
    EditFormService
  ]