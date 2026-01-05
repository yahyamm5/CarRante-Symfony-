<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\CustomerRepository;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Customer;

final class CustomerController extends AbstractController {

    #[Route('/newCustomer', name: "create_customer", methods: ['POST'])]
    public function CreateCustomer(Request $request, EntityManagerInterface $entityManager,ValidatorInterface $validator): Response {

        $data = json_decode($request->getContent(), true);

        $customer = new Customer();
        $customer->setName($data['name'] ?? null);
        $customer->setFirstname($data['firstname'] ?? null);
        $customer->setAddress($data['address'] ?? null);
        $customer->setEmail($data['email'] ?? null);
        $customer->setTelephone($data['telephone'] ?? null);

        $is_valide = $validator->validate($customer);
        if(count($is_valide) > 0){
            $errorString = (string) $is_valide;
            return new Response((string) $is_valide, 400);
        }

        $entityManager->persist($customer);
        $entityManager->flush();

        return new Response("Saved new customer with id :".$customer->getId(), 201);
    }
    
    #[Route('/customer/{customer_id}')]
    public function display($customer_id,CustomerRepository $repository): Response {

        $customer = $repository->findOneBy(['customer_id' => $customer_id]);

        if(!$customer){
            throw $this->createNotFoundException('No customer found with this id', $customer_id);
        }

        dd($customer);
    }



    #[Route('/update/{customer_id}', name: "customer_edit", methods: ['POST'])]
    public function update(Request $request,EntityManagerInterface $entityManager,int $customer_id): Response {

        $customer = $entityManager->getRepository(Customer::class)->find($customer_id);
        
        if(!$customer) {
            throw $this->createNotFoundException('No Customer found with id :'.$customer_id);
        }

        $data = json_decode($request->getContent(), true);

        $customer->setName($data['name'] ?? null);
        $customer->setFirstname($data['firstname'] ?? null);
        $customer->setAddress($data['address'] ?? null);
        $customer->setEmail($data['email'] ?? null);
        $customer->setTelephone($data['telephone'] ?? null);

        $entityManager->persist($customer);
        $entityManager->flush();

        return new Response("Updated customer with the id : ".$customer->getId(), 201);

    }

    #[Route('/delete/{customer_id}', name : "customer_delete", methods: ['POST'])]
    public function delete(EntityManagerInterface $entityManager,int $customer_id): Response {

        $customer = $entityManager->getRepository(Customer::class)->find($customer_id);

        if(!$customer){
            throw $this->createNotFoundException('No customer found for id : '.$customer_id);
        }

        $entityManager->remove($customer);

        $entityManager->flush();

        return new Response("deleted customer with the id : ".$customer->getId(), 201);
    }
    
    #[Route("/cutomer/allcustomers", name: "customer_list", methods: ['GET'])]
    public function displayAll(CustomerRepository $repository): Response {

        $customers = $repository->findAll();
        $data = [];
        foreach ($customers as $customer) {
            $data[] = [
                'id' => $customer->getId(),
                'name' => $customer->getName(),
                'firstname' => $customer->getFirstname(),
                'Address' => $customer->getAddress(),
                'email' => $customer->getEmail(),
                'Telephone' => $customer->getTelephone()
        ];
    }

    return $this->json($data);
    }

}
